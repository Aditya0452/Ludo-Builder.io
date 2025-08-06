import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, Home, Users, Dices } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface Player {
  id: number;
  name: string;
  color: "red" | "green" | "yellow" | "blue";
  pieces: number[];
  isActive: boolean;
}

const DICE_FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function GameOffline() {
  const [players] = useState<Player[]>([
    {
      id: 1,
      name: "Player 1",
      color: "red",
      pieces: [0, 0, 0, 0],
      isActive: true,
    },
    {
      id: 2,
      name: "Player 2",
      color: "green",
      pieces: [0, 0, 0, 0],
      isActive: false,
    },
    {
      id: 3,
      name: "Player 3",
      color: "yellow",
      pieces: [0, 0, 0, 0],
      isActive: false,
    },
    {
      id: 4,
      name: "Player 4",
      color: "blue",
      pieces: [0, 0, 0, 0],
      isActive: false,
    },
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    const newValue = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setDiceValue(newValue);
      setIsRolling(false);

      // Move to next player if not a 6
      if (newValue !== 6) {
        setCurrentPlayer((prev) => (prev + 1) % players.length);
      }
    }, 500);
  };

  const getPlayerColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "bg-ludo-red border-red-600";
      case "green":
        return "bg-ludo-green border-green-600";
      case "yellow":
        return "bg-ludo-yellow border-yellow-600";
      case "blue":
        return "bg-ludo-blue border-blue-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-300" />
                <span className="text-white font-semibold">Offline Game</span>
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  Local
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Restart
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <Home className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Player Status Cards */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Players</h3>
            {players.map((player, index) => (
              <Card
                key={player.id}
                className={`transition-all ${
                  index === currentPlayer
                    ? "bg-white/20 border-white/30 scale-105"
                    : "bg-black/20 border-white/10"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 ${getPlayerColorClass(player.color)}`}
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{player.name}</h4>
                      <p className="text-sm text-purple-200 capitalize">
                        {player.color}
                      </p>
                    </div>
                    {index === currentPlayer && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Active
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 flex space-x-1">
                    {player.pieces.map((piece, pieceIndex) => (
                      <div
                        key={pieceIndex}
                        className={`w-3 h-3 rounded-full border ${getPlayerColorClass(player.color)} opacity-60`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Game Board */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Ludo Board
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="aspect-square bg-game-board rounded-lg p-4 relative">
                  {/* Ludo Board Grid */}
                  <div className="w-full h-full grid grid-cols-15 gap-0 bg-white rounded-lg">
                    {/* This is a simplified board representation */}
                    {Array.from({ length: 225 }).map((_, index) => {
                      const row = Math.floor(index / 15);
                      const col = index % 15;

                      // Home areas
                      const isRedHome = row < 6 && col < 6;
                      const isGreenHome = row < 6 && col > 8;
                      const isYellowHome = row > 8 && col > 8;
                      const isBlueHome = row > 8 && col < 6;

                      // Center area
                      const isCenter =
                        row >= 6 && row <= 8 && col >= 6 && col <= 8;

                      let bgColor = "bg-white";
                      if (isRedHome) bgColor = "bg-red-200";
                      else if (isGreenHome) bgColor = "bg-green-200";
                      else if (isYellowHome) bgColor = "bg-yellow-200";
                      else if (isBlueHome) bgColor = "bg-blue-200";
                      else if (isCenter) bgColor = "bg-gray-300";

                      return (
                        <div
                          key={index}
                          className={`border border-gray-300 ${bgColor} aspect-square`}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dice Control */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg">Game Control</h3>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Current Turn
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-full mx-auto border-4 ${getPlayerColorClass(players[currentPlayer].color)}`}
                />
                <p className="text-white font-medium">
                  {players[currentPlayer].name}
                </p>
                <p className="text-purple-200 text-sm capitalize">
                  {players[currentPlayer].color} Player
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center flex items-center justify-center space-x-2">
                  <Dices className="h-5 w-5" />
                  <span>Dice</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div
                  className={`w-20 h-20 bg-white rounded-lg flex items-center justify-center text-4xl font-bold mx-auto cursor-pointer transition-transform hover:scale-105 ${
                    isRolling ? "animate-dice-roll" : ""
                  }`}
                  onClick={rollDice}
                >
                  {DICE_FACES[diceValue - 1]}
                </div>
                <Button
                  onClick={rollDice}
                  disabled={isRolling}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  {isRolling ? "Rolling..." : "Roll Dice"}
                </Button>
                <p className="text-purple-200 text-sm">
                  {diceValue === 6
                    ? "Roll again! You got a 6!"
                    : `You rolled: ${diceValue}`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
