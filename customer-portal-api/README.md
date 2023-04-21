### projeto de integração entre o gerenciador de sistemas e a interface do tcc

## todo:
<plugins>
  <plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <version>1.12</version>
    <executions>
      <execution>
        <id>install node and npm</id>
        <goals>
          <goal>install-node-and-npm</goal>
        </goals>
        <configuration>
          <nodeVersion>v14.16.0</nodeVersion>
          <npmVersion>6.14.11</npmVersion>
        </configuration>
      </execution>
      <execution>
        <id>npm install</id>
        <goals>
          <goal>npm</goal>
        </goals>
        <configuration>
          <arguments>install</arguments>
        </configuration>
      </execution>
      <execution>
        <id>npm build</id>
        <goals>
          <goal>npm</goal>
        </goals>
        <configuration>
          <arguments>run build</arguments>
        </configuration>
      </execution>
    </executions>
  </plugin>
</plugins>