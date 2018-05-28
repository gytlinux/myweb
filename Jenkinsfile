pipeline {
    agent { docker: 'node:8' }
    stages {
        stage('build') {
            steps {
                sh 'node start app.js'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}
