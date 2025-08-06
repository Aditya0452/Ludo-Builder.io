import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Users, Globe, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function GameOnline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Wifi className="h-5 w-5 text-green-400" />
                <span className="text-white font-semibold">Online Multiplayer</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Connected
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Online Multiplayer
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Connect with players worldwide and enjoy real-time Ludo matches!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Quick Match */}
          <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Search className="h-8 w-8 text-green-400" />
                <div>
                  <CardTitle className="text-white text-2xl">Quick Match</CardTitle>
                  <CardDescription className="text-green-200">Find opponents instantly</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">
                Jump into a game with players of similar skill level. Perfect for quick matches when you want to play right away!
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-200">Players online:</span>
                  <span className="text-green-400 font-semibold">2,847</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-200">Average wait time:</span>
                  <span className="text-green-400 font-semibold">~30 seconds</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3">
                <Search className="h-5 w-5 mr-2" />
                Find Match
              </Button>
            </CardContent>
          </Card>

          {/* Private Room */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-400" />
                <div>
                  <CardTitle className="text-white text-2xl">Private Room</CardTitle>
                  <CardDescription className="text-blue-200">Play with friends</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">
                Create a private room and invite your friends to join. Share the room code and enjoy exclusive matches!
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  Create Room
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Join Room
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Leaderboard Preview */}
        <Card className="mt-8 bg-black/20 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center space-x-2">
              <Globe className="h-6 w-6 text-yellow-400" />
              <span>Global Leaderboard</span>
            </CardTitle>
            <CardDescription className="text-purple-200">
              Top players worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'LudoMaster99', wins: 1247, country: '🇮🇳' },
                { rank: 2, name: 'KingOfDice', wins: 1189, country: '🇺🇸' },
                { rank: 3, name: 'RoyalPlayer', wins: 1156, country: '🇬🇧' },
                { rank: 4, name: 'DiceWarrior', wins: 1098, country: '🇨🇦' },
                { rank: 5, name: 'LudoLegend', wins: 1034, country: '🇦🇺' },
              ].map((player) => (
                <div key={player.rank} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 font-bold text-lg">#{player.rank}</span>
                    <span className="text-lg">{player.country}</span>
                    <span className="text-white font-medium">{player.name}</span>
                  </div>
                  <span className="text-green-400 font-semibold">{player.wins} wins</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Full Leaderboard
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon Features */}
        <Card className="mt-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Coming Soon</CardTitle>
            <CardDescription className="text-purple-200 text-center">
              Exciting features in development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎮</span>
                </div>
                <h4 className="text-white font-semibold">Ranked Matches</h4>
                <p className="text-purple-200 text-sm">Competitive ranking system</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-white font-semibold">Team Battles</h4>
                <p className="text-purple-200 text-sm">2vs2 online matches</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-white font-semibold">Seasonal Events</h4>
                <p className="text-purple-200 text-sm">Special limited-time tournaments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
