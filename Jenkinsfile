pipeline {

    agent any  

    environment {
        CI = 'false'
    }

    triggers {
        cron '''TZ=Australia/Sydney
        H H(9-17)/3 * * 1-7'''
    }

    tools {nodejs "NodeJS"}

    stages {
        stage('Install') {
            steps {
                echo "Installing nodejs packages"
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                echo "Testing"
                sh 'npm test'
            }
        }
        
        stage('Build for UAT') {
            when {
                branch 'dev'
            }

            steps {
                echo "Building for UAT"
                sh 'npm run build'
            }
        }
        
        stage('Build for Production') {
            when {
                branch 'main'
            }
            
            steps {
                echo "Build for Production"
                sh 'npm run build'
            }
        }

        stage('Deploy to UAT') {
            when {
                branch 'dev'
            }

            steps {
                echo "Deploying to UAT"
                withAWS(credentials: 'aws_pn', region: 'ap-southeast-2') {
                    //clean the bucket
                    sh 'aws s3 rm s3://uat.petnanny.live --recursive'
                    //copy the all files
                    sh 'aws s3 sync ./build s3://uat.petnanny.live'
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            
            steps {
                echo "Deploying to Production"
                withAWS(credentials: 'aws_pn', region: 'ap-southeast-2') {
                    //clean the bucket
                    sh 'aws s3 rm s3://prod.petnanny.live --recursive'
                    //copy the all files
                    sh 'aws s3 sync ./build s3://prod.petnanny.live'
                }
            }
        }
    }

    post {
        always {
        cleanWs()
				sh 'ls -la'
            }
        
        success {
            echo "In post-success"
            emailext (
                subject: "Jenkins build has completed",
                body: """Hi,
                        The build has completed.
                        Thanks,
                        Jenkins""",
                recipientProviders: [buildUser()],
                attachLog: true
            )

            }

         failure {
            echo "In post-failure"
            emailext (

                subject: 'Failed Jenkins Build',
                body: """Hi,
                        The build has failed.
                        Please check.
                        Thanks,
                        Jenkins""", 
                recipientProviders: [buildUser(), developers()], 
                attachLog: true
            )                
            
            }
    }   
    
}