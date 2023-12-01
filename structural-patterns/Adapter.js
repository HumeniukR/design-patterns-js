/*
  Allows objects with incompatible interfaces to work together. Useful for integrating new code with existing systems.
*/

// Existing system with a legacy interface
class LegacySystem {
  requestLegacyData() {
    return 'Legacy Data';
  }
}

// New system expecting a different interface
class NewSystem {
  requestNewData() {
    return 'New Data';
  }
}

// Adapter to make the legacy system compatible with the new system
class Adapter {
  constructor(legacySystem) {
    this.legacySystem = legacySystem;
  }

  requestNewData() {
    const legacyData = this.legacySystem.requestLegacyData();
    // Adapt the legacy data to fit the new system's expectations
    const adaptedData = `Adapted: ${legacyData}`;
    return adaptedData;
  }
}

function systemConsumer(newSystem) {
  console.log(newSystem.requestNewData());
}

// Example
const legacySystem = new LegacySystem();
const adapter = new Adapter(legacySystem);

// Using the adapter to make the legacy system work with the new system
systemConsumer(adapter)
// Printed: Adapted: Legacy Data
