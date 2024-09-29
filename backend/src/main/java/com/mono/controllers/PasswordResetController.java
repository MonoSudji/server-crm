//package com.mono.controllers;
//
//import com.mono.service.PasswordResetService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/auth")
//class PasswordResetController {
//
//    final PasswordResetService passwordResetService;
//
//    @Autowired
//    PasswordResetController(PasswordResetService passwordResetService) {
//        this.passwordResetService = passwordResetService;
//    }
//
//    @PostMapping("/reset-password/initiate")
//    ResponseEntity<Void> initiatePasswordReset(@RequestParam String email) {
//        passwordResetService.initiatePasswordReset(email);
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping("/reset-password/execute")
//    ResponseEntity<Void> resetPassword(@RequestParam String token, @RequestParam String newPassword) {
//        passwordResetService.resetPassword(token, newPassword);
//        return ResponseEntity.ok().build();
//    }
//}
