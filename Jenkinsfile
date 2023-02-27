pipeline {
    agent any
    
    tools {nodejs "NodeJs"}

    stages {
        stage('Git checkout') {
            steps{
                // Get source code from a GitHub repository
                git branch:'dev', url:'https://github.com/petNanny/pn-app.git'
            }
        }
        
        stage('npm install') {
            steps{
                sh 'npm install'
            }
        }
        
        stage('test') {
            steps{
                    sh 'npm test'
            }
        }
        
        stage('build') {
            steps{
                    sh 'npm run build'
            }
        }
        
        stage ('upload artifactss to s3'){
            steps{
                withAWS(credentials: 'aws_jrg', region: 'ap-southeast-2') {
                    sh 'aws s3 ls'
                    sh 'aws s3 sync ./build s3://petnanny.live'
                }
            }
                
         }

    }
    
    post {
        always {
            cleanWs()
        }
    } 
}
