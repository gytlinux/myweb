pipeline {
    agent {
        docker {
            image 'node:8'
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
           steps {
              sh 'yarn global add pm2'
              sh 'pm2 start app.js' 
           }
        }
    
    }
    post {
        always {
            echo 'this is a test'
            deleteDir()
            }
        success {
            echo 'I succeeeded'
            }
        unstable {
            echo 'I am unstable :/'
            }
        failure {
            echo 'I failed :('
            }
        changed {
            echo 'Things were different before...'
            }
    }
}
