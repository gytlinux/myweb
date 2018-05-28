Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker: 'node:8' }
    stages {
        stage('build') {
            steps {
                sh 'node -v&&npm -v'
            }
        }
    }
}
