package app.btyd.controller;

import app.btyd.common.Page;
import app.btyd.common.Result;
import app.btyd.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/list")
    public ResponseEntity<?> getUserList(@RequestParam(name = "pageIndex", defaultValue = "1") Integer pageIndex,
                                         @RequestParam(name = "pageSize", defaultValue = "20") Integer pageSize) {
        var userDTOList = this.userService.getUserList(pageIndex, pageSize);
        var userCount = this.userService.getUserCount();
        return ResponseEntity.ok(Result.of(Page.of(userDTOList, userCount)));
    }
}
