package learn.springang.empmsback.domain;

import lombok.Data;

import javax.persistence.*;
//import java.io.Serializable;

@Entity
@Data
public class EmployeeEntity /*implements Serializable*/ {   // todo: research whether it should be Serializable
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String employeeCode;
}
