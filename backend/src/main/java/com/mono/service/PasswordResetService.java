package com.mono.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mono.models.User;
import com.mono.repository.UserRepo;

@Service
public class PasswordResetService {

    final UserRepo userRepository;
    final EmailService emailService;
    final PasswordEncoder passwordEncoder;

    @Autowired
    public PasswordResetService(UserRepo userRepository, EmailService emailService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
    }

    public void initiatePasswordReset(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            String token = UUID.randomUUID().toString();
            user.setResetToken(token);
            user.setResetTokenExpiry(System.currentTimeMillis() + 3600000);
            userRepository.save(user);

            String resetLink = "http://your-app-url/reset-password?token=" + token;
            String message = "To reset your password, click the link below:\n" + resetLink;
            emailService.sendEmail(email, "Password Reset", message);
        }
    }

    public void resetPassword(String token, String newPassword) {
        Optional<User> optionalUser = userRepository.findByResetToken(token);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getResetTokenExpiry() > System.currentTimeMillis()) {
                user.setPassword(passwordEncoder.encode(newPassword));
                user.setResetToken(null);
                user.setResetTokenExpiry(null);
                userRepository.save(user);
            } else {
                throw new RuntimeException("Reset token has expired");
            }
        } else {
            throw new RuntimeException("Invalid reset token");
        }
    }
}
