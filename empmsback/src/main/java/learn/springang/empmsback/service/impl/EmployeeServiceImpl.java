package learn.springang.empmsback.service.impl;

import learn.springang.empmsback.domain.EmployeeEntity;
import learn.springang.empmsback.repository.EmployeeRepository;
import learn.springang.empmsback.service.EmployeeService;
import learn.springang.empmsback.service.exception.EmployeeNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeEntity addEmployee(EmployeeEntity employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    @Override
    public List<EmployeeEntity> findAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public EmployeeEntity findEmployeeById(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @Override
    public EmployeeEntity updateEmployee(EmployeeEntity employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
