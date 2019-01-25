node('node') {
  env.NODEJS_HOME = "${tool 'Node 6.x'}"
  // on linux / mac
  env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
  // on windows
  env.PATH="${env.NODEJS_HOME};${env.PATH}"

  stage('Install Dependencies') {
    sh 'node -v'
    sh 'npm -v'
    sh 'npm install'
  }
}