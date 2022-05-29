package learn.springang.empmsback.repository;

import learn.springang.empmsback.domain.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
