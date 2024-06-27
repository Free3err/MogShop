package com.mogshop.controller;

import com.mogshop.entity.AppUser;
import com.mogshop.entity.request.LoginRequest;
import com.mogshop.service.AppUserService;
import com.mogshop.entity.request.RegistrationRequest;
import com.mogshop.service.LoginService;
import com.mogshop.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping
public class ShopController {

    private final AppUserService appUserService;
    private final RegistrationService registrationService;
    private final LoginService loginService;

    /**
     * Метод, который регистрирует нового пользователя
     * @param request - экземпляр класса RegistrationRequest
     * @return перенаправляет на URL-aдрес "/mog/shop"
     */
    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, Boolean>> register(@RequestBody RegistrationRequest request){
        Map<String, Boolean> response = new HashMap<>();
        response.put("RegistrationStatus",registrationService.registration(request));

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, Boolean>> login(@RequestBody LoginRequest request){
        Map<String, Boolean> response = new HashMap<>();
        response.put("LoginStatus", loginService.login(request));
        return ResponseEntity.ok(response);
    }

    /**
     * Метод, который показывает информацию о пользователе
     * @param username - поле экземпляра класса AppUser для того, чтобы с его помощью загрузить информацию о пользователе
     * @return данные о пользователе в формате JSON
     */
    @GetMapping("/profile{username}")
    public ResponseEntity<AppUser> userProfile(@PathVariable String username){
        AppUser user = (AppUser) appUserService.loadUserByUsername(username);
        return ResponseEntity.ok(user);
    }



}
