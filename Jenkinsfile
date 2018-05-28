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
              sh 'pm2 start app.js' 
           }
        }
    
    }
    post {
        failure {
            mail to:'gytlinux@163.com',
                 subject: "wrong",
                 body: "wrong ${env.BUILD_URL}"
            }
    }
}
