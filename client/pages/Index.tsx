import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Trophy, Crown, Coins, Star, Gamepad2, Wifi, WifiOff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-xl">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Ludo King</h1>
                <p className="text-sm text-purple-200">Royal Gaming Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                <Coins className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">1,250</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Online
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Play the Ultimate
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Ludo </span>
            Experience
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Join millions of players worldwide in the most exciting Ludo game with tournaments, events, and rewards!
          </p>
        </div>

        {/* Main Game Modes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Offline Mode */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <WifiOff className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white text-2xl">Offline Mode</CardTitle>
                    <CardDescription className="text-blue-200">Play with friends locally</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Free</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">
                Play classic Ludo with 1-4 players on the same device. Perfect for family gatherings and friends!
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-300" />
                  <span className="text-sm text-purple-300">1-4 Players</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="h-4 w-4 text-purple-300" />
                  <span className="text-sm text-purple-300">Local Multiplayer</span>
                </div>
              </div>
              <Link to="/game/offline">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
                  <Play className="h-5 w-5 mr-2" />
                  Start Offline Game
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Online Mode */}
          <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-8 w-8 text-green-400" />
                  <div>
                    <CardTitle className="text-white text-2xl">Online Mode</CardTitle>
                    <CardDescription className="text-green-200">Play with players worldwide</CardDescription>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Free</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">
                Join online matches with players from around the world. Climb the leaderboards!
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-300" />
                  <span className="text-sm text-purple-300">1-4 Players</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-purple-300" />
                  <span className="text-sm text-purple-300">Ranked Matches</span>
                </div>
              </div>
              <Link to="/game/online">
                <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3">
                  <Play className="h-5 w-5 mr-2" />
                  Join Online Game
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Events & Tournaments */}
        <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Trophy className="h-8 w-8 text-yellow-400" />
                <div>
                  <CardTitle className="text-white text-3xl">Events & Tournaments</CardTitle>
                  <CardDescription className="text-yellow-200">Win gold coins and exclusive rewards</CardDescription>
                </div>
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
                Live Events
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-purple-200 text-lg">
              Participate in exclusive tournaments with multiple levels. Compete against 64, 32, 16, 8, or 4 players in progressive elimination rounds!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">Tournament Levels</h4>
                <p className="text-yellow-200 text-sm">Progressive elimination from 64 → 32 → 16 → 8 → 4 players</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">Team Mode</h4>
                <p className="text-yellow-200 text-sm">2vs2 mode available - help your teammate win!</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">Rewards</h4>
                <p className="text-yellow-200 text-sm">Win gold coins and exclusive prizes for top positions</p>
              </div>
            </div>

            <Link to="/tournaments">
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 text-lg">
                <Trophy className="h-5 w-5 mr-2" />
                Join Tournament
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Game Features */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold">Red Player</h3>
            <p className="text-purple-200 text-sm">First to play in turn order</p>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold">Green Player</h3>
            <p className="text-purple-200 text-sm">Second in turn order</p>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold">Yellow Player</h3>
            <p className="text-purple-200 text-sm">Third in turn order</p>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold">Blue Player</h3>
            <p className="text-purple-200 text-sm">Fourth in turn order</p>
          </div>
        </div>
      </section>
    </div>
  );
}
