package com.mogshop.service;

import com.mogshop.entity.AppUser;
import com.mogshop.entity.request.LoginRequest;
import com.mogshop.security.PasswordEncoder;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {
    AppUserService appUserService;
    PasswordEncoder passwordEncoder;

    public boolean login(LoginRequest loginRequest){
        AppUser user;
        try{
            user = (AppUser) appUserService.loadUserByUsername(loginRequest.getUsername());
        }
        catch (UsernameNotFoundException e){
            e.printStackTrace();

            return false;
        }
        return passwordEncoder.bCryptPasswordEncoder().matches(user.getPassword(), loginRequest.getPassword());
    }
}
