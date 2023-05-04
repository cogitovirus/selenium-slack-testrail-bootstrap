pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your repository
                git 'https://github.com/cogitovirus/selenium-slack-testrail-bootstrap.git'
            }
        }
        stage('Install dependencies') {
            steps {
                // Install Node.js using the NodeJS plugin
                // Make sure to install the NodeJS plugin in Jenkins beforehand
                // sh 'curl -fsSL https://install-node.now.sh/lts | bash -s -- --yes'
                // sh 'export PATH="$HOME/.local/bin:$PATH"'
                sh 'node --version'
                sh 'npm --version'

                // Install project dependencies
                sh 'npm ci'
            }
        }
        stage('Run tests') {
            steps {
                // Run Mocha tests
                sh 'npm test'
            }
        }
    }
}
