package app.btyd.controller;

import app.btyd.common.Result;
import app.btyd.model.TopicCreation;
import app.btyd.service.TopicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/topic")
public class TopicController {

    private final TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping("/list")
    public ResponseEntity<?> getTopicList(@RequestParam(name = "pageIndex", defaultValue = "1") Integer pageIndex,
                                          @RequestParam(name = "pageSize", defaultValue = "20") Integer pageSize) {
        var topicList = this.topicService.getTopicItemList(pageIndex, pageSize);
        return ResponseEntity.ok(Result.of(topicList));
    }

    @PostMapping("/create")
    public ResponseEntity<?> createTopic(@RequestBody TopicCreation topicCreateDTO) {
        var topicDTO = this.topicService.createTopic(topicCreateDTO);
        return ResponseEntity.ok(Result.of(topicDTO));
    }
}
