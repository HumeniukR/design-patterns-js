/*
	Provides a simplified interface to a set of interfaces in a subsystem, making it easier to use.
	It hides the complexities of the subsystem and provides a single entry point for the client.
*/

// Subsystem components
class Amplifier {
  on() {
    console.log('Amplifier is on');
  }

  setVolume(volume) {
    console.log(`Setting volume to ${volume} %`);
  }

  off() {
    console.log('Amplifier is off');
  }
}

class DVDPlayer {
  play(movie) {
    console.log(`Playing DVD: ${movie}`);
  }

  stop() {
    console.log('DVD Player stopped');
  }
}

class Projector {
  turnOn() {
    console.log('Projector is on');
  }

  turnOff() {
    console.log('Projector is off');
  }
}

// Facade
class HomeTheaterFacade {
  constructor(amplifier, dvdPlayer, projector) {
    this.amplifier = amplifier;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');
    this.amplifier.on();
    this.amplifier.setVolume(20);
    this.dvdPlayer.play(movie);
    this.projector.turnOn();
  }

  endMovie() {
    console.log('Shutting down the home theater...');
    this.amplifier.off();
    this.dvdPlayer.stop();
    this.projector.turnOff();
  }
}

// Client code
const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector);

// Watching a movie using the facade
homeTheater.watchMovie('Forrest Gump');
// Get ready to watch a movie...
// Amplifier is on
// Setting volume to 20 %
// Playing DVD: Forrest Gump
// Projector is on

// Ending the movie using the facade
homeTheater.endMovie();
// Shutting down the home theater...
// Amplifier is off
// DVD Player stopped
// Projector is off
