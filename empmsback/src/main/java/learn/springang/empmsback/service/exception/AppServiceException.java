package learn.springang.empmsback.service.exception;

public class AppServiceException extends RuntimeException {
    public AppServiceException(String message) {
        super(message);
    }
}
