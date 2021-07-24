package app.btyd.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ServiceController {

    @GetMapping("/hi")
    public ResponseEntity<?> hello() {
        return ResponseEntity.ok("hi");
    }
}
