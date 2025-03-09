'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Orientation {
  pitch: number;
  roll: number;
  yaw: number;
}

interface Telemetry {
  altitude: number;
  speed: number;
  battery: number;
  orientation: Orientation;
  flightTime: number;
  temperature: number;
  resolution: string;
  cameraMode: string;
}

export default function DronePage() {
  const [telemetry, setTelemetry] = useState<Telemetry>({
    altitude: 10,
    speed: 2,
    battery: 100,
    orientation: { pitch: 0, roll: 0, yaw: 0 },
    flightTime: 0,
    temperature: 25,
    resolution: '1920x1080',
    cameraMode: 'HDR',
  });

  // Simulated telemetry updates (Replace with real drone API)
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        altitude: Math.max(0, prev.altitude + (Math.random() - 0.5) * 0.5),
        speed: Math.max(0, prev.speed + (Math.random() - 0.5) * 0.3),
        battery: Math.max(0, prev.battery - 0.05),
        flightTime: prev.flightTime + 1, // increment flight time by 1s
        orientation: {
          pitch: prev.orientation.pitch + (Math.random() - 0.5) * 2,
          roll: prev.orientation.roll + (Math.random() - 0.5) * 2,
          yaw: prev.orientation.yaw + (Math.random() - 0.5) * 2,
        },
        temperature: prev.temperature + (Math.random() - 0.5) * 0.2,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to send drone commands
  const sendCommand = (command: string) => {
    console.log(`Sending command: ${command}`);
    // TODO: Integrate with your drone API/ROS backend
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Drone Control Panel</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome to the Drone page!</p>

      {/* Main content: Control Panel and Telemetry Panel side by side */}
      <div className="w-full flex gap-6">
        {/* Control Panel */}
        <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Controls</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Arrow Navigation Layout */}
            <div className="col-span-3 grid grid-cols-3 gap-4 place-items-center">
              <button
                onClick={() => sendCommand('forward')}
                className="col-span-3 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                ↑ Forward
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => sendCommand('left')}
                  className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  ← Left
                </button>
                <button
                  onClick={() => sendCommand('right')}
                  className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  → Right
                </button>
              </div>
              <button
                onClick={() => sendCommand('backward')}
                className="col-span-3 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                ↓ Backward
              </button>
            </div>

            {/* Vertical Up/Down buttons */}
            <div className="col-span-1 grid grid-rows-3 gap-4">
              <button
                onClick={() => sendCommand('up')}
                className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                ↑ Up
              </button>
              <button
                onClick={() => sendCommand('down')}
                className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                ↓ Down
              </button>
            </div>

            <button
              onClick={() => sendCommand('land')}
              className="col-span-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Land
            </button>
          </div>
        </div>

        {/* Telemetry Panel */}
        <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Telemetry</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Altitude:</strong> {telemetry.altitude.toFixed(2)} m
            </p>
            <p className="text-lg">
              <strong>Speed:</strong> {telemetry.speed.toFixed(2)} m/s
            </p>
            <p className="text-lg">
              <strong>Battery:</strong> {telemetry.battery.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Return to Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-700">
          Return to Home
        </button>
      </Link>
    </main>
  );
}
