import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Coins, Clock, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

export default function Tournaments() {
  const tournaments = [
    {
      id: 1,
      name: 'Golden Crown Championship',
      participants: 64,
      maxParticipants: 64,
      prize: 10000,
      entryFee: 100,
      status: 'registering',
      timeLeft: '2h 30m',
      level: 'Beginner',
    },
    {
      id: 2,
      name: 'Royal Palace Tournament',
      participants: 28,
      maxParticipants: 32,
      prize: 5000,
      entryFee: 50,
      status: 'registering',
      timeLeft: '1h 15m',
      level: 'Intermediate',
    },
    {
      id: 3,
      name: 'Elite Masters Cup',
      participants: 12,
      maxParticipants: 16,
      prize: 2500,
      entryFee: 25,
      status: 'registering',
      timeLeft: '45m',
      level: 'Advanced',
    },
    {
      id: 4,
      name: 'Weekend Warriors',
      participants: 16,
      maxParticipants: 16,
      prize: 1000,
      entryFee: 10,
      status: 'live',
      timeLeft: 'Live',
      level: 'All Levels',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registering': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
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
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-semibold">Tournaments & Events</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                <Coins className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">1,250</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tournament Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tournaments & Events
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Compete in exciting tournaments with progressive elimination rounds and win amazing rewards!
          </p>
        </div>

        {/* Tournament Explanation */}
        <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-400" />
              <span>How Tournaments Work</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">📝 Registration</h4>
                <p className="text-yellow-200 text-sm">
                  Join tournaments with 64, 32, 16, 8, or 4 players. Teams are automatically created with 4 players each.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">🏆 Progressive Levels</h4>
                <p className="text-yellow-200 text-sm">
                  Winners from each team advance to the next level. Background changes with each level progression.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-white font-semibold mb-2">🎁 Rewards</h4>
                <p className="text-yellow-200 text-sm">
                  Top 4 finalists receive gold coin rewards. 1st place gets the biggest prize!
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
              <h4 className="text-white font-semibold mb-2">👥 Team Mode (2vs2)</h4>
              <p className="text-purple-200 text-sm">
                Option to team up as 2+2 players. If your teammate reaches the final path first, they can help you. Otherwise, continue as 1vs3.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Tournaments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="bg-black/20 border-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-lg">{tournament.name}</CardTitle>
                    <CardDescription className="text-purple-200">
                      {tournament.participants}/{tournament.maxParticipants} players
                    </CardDescription>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge className={getStatusColor(tournament.status)}>
                      {tournament.status === 'registering' ? 'Registering' : 
                       tournament.status === 'live' ? 'Live' : 'Completed'}
                    </Badge>
                    <Badge className={getLevelColor(tournament.level)}>
                      {tournament.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Participant Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-200">Participants</span>
                    <span className="text-white">{tournament.participants}/{tournament.maxParticipants}</span>
                  </div>
                  <Progress 
                    value={(tournament.participants / tournament.maxParticipants) * 100} 
                    className="h-2"
                  />
                </div>

                {/* Prize and Entry Fee */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Coins className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{tournament.prize.toLocaleString()}</span>
                    <span className="text-purple-200 text-sm">prize</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-200 text-sm">Entry:</span>
                    <span className="text-white font-semibold">{tournament.entryFee}</span>
                    <Coins className="h-3 w-3 text-yellow-400" />
                  </div>
                </div>

                {/* Time and Players */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold">{tournament.timeLeft}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-300" />
                    <span className="text-purple-300 text-sm">Max {tournament.maxParticipants} players</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className={`w-full font-semibold ${
                    tournament.status === 'live' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                      : 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
                  } text-white`}
                  disabled={tournament.participants >= tournament.maxParticipants && tournament.status !== 'live'}
                >
                  {tournament.status === 'live' ? 'Watch Live' : 
                   tournament.participants >= tournament.maxParticipants ? 'Full' : 
                   `Join (${tournament.entryFee} coins)`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Tournament */}
        <Card className="mt-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Create Your Own Tournament</CardTitle>
            <CardDescription className="text-purple-200 text-center">
              Host your own tournament and invite friends to join!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3">
              <Trophy className="h-5 w-5 mr-2" />
              Create Tournament
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
