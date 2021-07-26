package app.btyd.common;

import java.util.List;

public record Page<T>(List<T> list, Integer total) {

    public static <U> Page<U> of(List<U> list, Integer total) {
        return new Page<>(list, total);
    }
}
