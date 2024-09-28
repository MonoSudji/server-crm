//package com.mono.controllers;
//
//import com.mono.service.PasswordResetService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/auth")
//public class PasswordResetController {
//
//    private final PasswordResetService passwordResetService;
//
//    @Autowired
//    public PasswordResetController(PasswordResetService passwordResetService) {
//        this.passwordResetService = passwordResetService;
//    }
//
//    @PostMapping("/reset-password/initiate")
//    public ResponseEntity<Void> initiatePasswordReset(@RequestParam String email) {
//        passwordResetService.initiatePasswordReset(email);
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping("/reset-password/execute")
//    public ResponseEntity<Void> resetPassword(@RequestParam String token, @RequestParam String newPassword) {
//        passwordResetService.resetPassword(token, newPassword);
//        return ResponseEntity.ok().build();
//    }
//}
