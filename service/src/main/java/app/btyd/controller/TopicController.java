package app.btyd.controller;

import app.btyd.common.Result;
import app.btyd.dto.TopicCreationDTO;
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

    @GetMapping
    public ResponseEntity<?> getTopic(@RequestParam("id") Integer id) {
        var topicDTO = this.topicService.getTopic(id);
        return ResponseEntity.ok(Result.of(topicDTO));
    }

    @GetMapping("/list")
    public ResponseEntity<?> getTopicList(@RequestParam(name = "pageIndex", defaultValue = "1") Integer pageIndex,
                                          @RequestParam(name = "pageSize", defaultValue = "20") Integer pageSize) {
        var topicItemDTOList = this.topicService.getTopicItemList(pageIndex, pageSize);
        this.topicService.getTopicItemList(pageIndex, pageSize);
        return ResponseEntity.ok(Result.of(topicItemDTOList));
    }

    @PostMapping("/create")
    public ResponseEntity<?> createTopic(@RequestBody TopicCreationDTO topicCreateDTO) {
        var topicDTO = this.topicService.createTopic(topicCreateDTO);
        return ResponseEntity.ok(Result.of(topicDTO));
    }
}
