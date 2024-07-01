pipeline {
    agent none
    stages {
        stage('Run Tests for Dev Branch') {
            agent {
                label 'nodejs-agent'
            }
            steps {
                container('node') {
                    sh 'node -v'
                    sh 'echo "This is a test pipeline"'
                }
            }
        }
    }
}
