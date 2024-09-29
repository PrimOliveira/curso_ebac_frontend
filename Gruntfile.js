module.exports = function(grunt) {

    // Configurações do Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Compilação LESS
      less: {
        development: {
          files: {
            'dist/css/styles.css': 'src/less/styles.less'
          }
        }
      },
  
      // Minificação JS
      uglify: {
        build: {
          files: {
            'dist/js/app.min.js': ['src/js/app.js']
          }
        }
      },
  
      // Watcher para monitorar mudanças
      watch: {
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['uglify'],
          options: {
            spawn: false,
          }
        },
        styles: {
          files: ['src/less/*.less'],
          tasks: ['less'],
          options: {
            spawn: false,
          }
        }
      }
    });
  
    // Carregando os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  