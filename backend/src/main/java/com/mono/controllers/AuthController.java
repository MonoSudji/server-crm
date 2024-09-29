package com.mono.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mono.dto.UserDto;
import com.mono.models.LoginCredentials;
import com.mono.models.User;
import com.mono.security.JWTUtil;
import com.mono.service.PasswordResetService;
import com.mono.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    final UserService userService;
    final PasswordResetService passwordResetService;
    final JWTUtil jwtUtil;

    @Autowired
    public AuthController(UserService userService, PasswordResetService passwordResetService, JWTUtil jwtUtil) {
        this.userService = userService;
        this.passwordResetService = passwordResetService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.registerUser(userDto);
        
        String token = jwtUtil.generateToken(createdUser.getUsername());
    
        Map<String, Object> response = new HashMap<>();
        response.put("user", createdUser);
        response.put("token", token);
    
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }    
    
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginCredentials loginCredentials) {
        String token = userService.authenticateUser(loginCredentials);
        if (token != null) {
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/reset-password/initiate")
    public ResponseEntity<String> initiatePasswordReset(@RequestParam String email) {
        passwordResetService.initiatePasswordReset(email);
        return ResponseEntity.ok("Password reset link sent to your email.");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        passwordResetService.resetPassword(token, newPassword);
        return ResponseEntity.ok("Password has been reset successfully.");
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> getCurrentUser() {
        User user = userService.getCurrentUser();
        UserDto userDto = new UserDto(user.getId(), user.getUsername(), user.getEmail());
        return ResponseEntity.ok(userDto);
    }
}
