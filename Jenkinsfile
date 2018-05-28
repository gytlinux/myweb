pipeline {
    agent { docker: 'node:8' }
    stages {
        stage('build') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'echo "Hello World!"'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}
