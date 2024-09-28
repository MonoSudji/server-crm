package com.mono.service;

import com.mono.dto.UserDto;
import com.mono.mapper.UserMapper;
import com.mono.models.LoginCredentials;
import com.mono.models.User;
import com.mono.repository.UserRepo;
import com.mono.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtil jwtUtil;

    @Autowired
    public UserService(UserRepo userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder, JWTUtil jwtUtil) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public UserDto registerUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return userMapper.toDto(savedUser);
    }

    public String authenticateUser(LoginCredentials loginCredentials) {
        Optional<User> userOptional = userRepository.findByUsername(loginCredentials.getUsername());

        if (userOptional.isPresent() && passwordEncoder.matches(loginCredentials.getPassword(), userOptional.get().getPassword())) {
            return jwtUtil.generateToken(userOptional.get().getUsername());
        }
        return null;
    }

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            return userRepository.findByUsername(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("User not found"));
        }
        throw new RuntimeException("No authenticated user found");
    }
}
