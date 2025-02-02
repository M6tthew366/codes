import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const games = [
  { id: "snake", name: "Snake" },
  { id: "tic-tac-toe", name: "Tic-Tac-Toe" }
];

export default function GamePlatform() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen bg-red-900 text-white flex flex-col items-center p-10">
      <motion.h1
        className="text-4xl font-bold mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        M Gaming Platform
      </motion.h1>

      {!selectedGame ? (
        <div className="grid grid-cols-2 gap-4">
          {games.map((game) => (
            <Card key={game.id} className="bg-red-700 hover:bg-red-600 cursor-pointer" onClick={() => setSelectedGame(game.id)}>
              <CardContent className="p-6 text-center text-lg font-semibold">
                {game.name}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">{games.find(g => g.id === selectedGame)?.name}</h2>
          <p>Game content will go here...</p>
          <Button className="mt-4 bg-white text-red-900" onClick={() => setSelectedGame(null)}>
            Back to Menu
          </Button>
        </div>
      )}
    </div>
  );
}
