package app.btyd.service;

import app.btyd.entity.TopicEntity;
import app.btyd.model.LimitQuery;
import app.btyd.model.TopicCreation;
import app.btyd.model.Topic;
import app.btyd.model.TopicListItem;
import app.btyd.repository.TopicRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<TopicListItem> getTopicItemList(Integer pageIndex, Integer pageSize) {
        var limitQuery = new LimitQuery(pageSize, (pageIndex - 1) * pageSize);
        var topicList = this.topicRepository.selectTopicList(limitQuery);
        return topicList.stream().map(mapToTopicListItemDTO()).toList();
    }

    public Topic createTopic(TopicCreation topicCreateDTO) {
        var topic = new TopicEntity(
                null,
                0, 0,
                topicCreateDTO.title(),
                topicCreateDTO.content(),
                null,
                null
        );
        var topicId = topicRepository.insertTopic(topic);
        return null;
    }

    private static Function<TopicEntity, TopicListItem> mapToTopicListItemDTO() {
        return (topic) -> {
            //
            return new TopicListItem(
                    topic.id(),
                    topic.title(),
                    "",
                    "",
                    "",
                    "",
                    "",
                    topic.updatedTime(),
                    0
            );
        };
    }
}
