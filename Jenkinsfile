pipeline {
    agent { 
        docker {
            image 'node:8' 
            args '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'yarn add global pm2'
                sh 'pm2 start app.js'
            }
        }
    }
}
