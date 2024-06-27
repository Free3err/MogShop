package com.mogshop.service;

import com.mogshop.entity.AppUser;
import com.mogshop.entity.request.RegistrationRequest;
import com.mogshop.entity.role.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserService appUserService;

    public boolean registration(RegistrationRequest request){
        boolean response =appUserService.singUpUser(
                new AppUser(
                        request.getUsername(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );
        return response;
    }
}
