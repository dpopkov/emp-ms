package learn.springang.empmsback.service.exception;

public class EmployeeNotFoundException extends AppServiceException {
    public EmployeeNotFoundException(Long employeeId) {
        super("Cannot find Employee by ID " + employeeId);
    }
}
