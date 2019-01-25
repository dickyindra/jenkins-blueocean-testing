pipeline {
  agent any

  tools {
    nodejs "node"
  }

  stages {
    stage('Install Dependencies') {
      steps {
        node 'npm install'
      }
    }
  }
}