package learn.springang.empmsback.service;

import learn.springang.empmsback.domain.EmployeeEntity;

import java.util.List;

public interface EmployeeService {

    EmployeeEntity addEmployee(EmployeeEntity employee);

    List<EmployeeEntity> findAllEmployees();

    EmployeeEntity findEmployeeById(Long id);

    EmployeeEntity updateEmployee(EmployeeEntity employee);

    void deleteEmployee(Long id);
}
