/*
  Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
*/

class Alarm {
  enable() {
    console.log('Alarm is ON');
  }

  disable() {
    console.log('Alarm is OFF');
  }
}

// Command interface
class Command {
  execute() {}
}

// Concrete Command for turning the alarm on
class AlarmEnableCommand extends Command {
  constructor(alarm) {
    super();
    this.alarm = alarm;
  }

  execute() {
    this.alarm.enable();
  }
}

// Concrete Command for turning the alarm off
class AlarmDisableCommand extends Command {
  constructor(alarm) {
    super();
    this.alarm = alarm;
  }

  execute() {
    this.alarm.disable();
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

const alarm = new Alarm();
const alarmEnableCommand = new AlarmEnableCommand(alarm);
const alarmDisableCommand = new AlarmDisableCommand(alarm);

const remote = new RemoteControl();

// Turning the alarm on
remote.setCommand(alarmEnableCommand);
remote.pressButton(); // Alarm is ON

// Stop alarm
remote.setCommand(alarmDisableCommand);
remote.pressButton(); // Alarm is OFF
