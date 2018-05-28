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
        success {
            echo "Success!"
            }
        unstable {
            echo 'I am unstable :/'
            }
        failure {
            mail to:'gytlinux@163.com',
                 subject: "Success",
                 body: "success ${env.BUILD_URL}"
            }
        changed {
            echo 'Things were different before...'
            }
    }
}
