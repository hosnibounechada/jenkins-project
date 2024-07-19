pipeline {
    agent none
    stages {
        stage('Run CD on main branch') {
            agent {
                label 'nodejs-agent'
            }
            when {
                branch 'main'
            }
            steps {
                container('node') {
                    sh 'node -v'
                    sh 'echo "This is a CD pipeline"'
                }
            }
        }

        stage('Run CD on develop branch') {
            agent {
                label 'nodejs-agent'
            }
            when {
                branch 'develop'
            }
            steps {
                container('node') {
                    sh 'node -v'
                    sh 'echo "This is a CD pipeline"'
                }
            }
        }

        stage('Run CI for PR branch') {
            agent {
                label 'nodejs-agent'
            }
            when {
                branch 'PR-*'
            }
            steps {
                container('node') {
                    sh 'echo "This is a test pipeline"'
                }
            }
        }
    }
}
