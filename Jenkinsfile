pipeline {
    agent { 
        docker: {
            image 'node:8' 
            args '-p 3000:3000'
        }
    }
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
