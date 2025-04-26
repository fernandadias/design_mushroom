'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Link from 'next/link';

type AuthMode = 'login' | 'register';

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de autenticação
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar para dashboard após autenticação
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative h-16 w-16">
              <Image
                src="/images/designmushroom-icon.png"
                alt="Design Mushroom"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative h-10 w-full mb-6">
            <Image
              src="/images/designmushroom-big.png"
              alt="Design Mushroom"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            {mode === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {mode === 'login'
              ? 'Acesse a plataforma de agentes de IA para design'
              : 'Comece a usar os agentes de IA para design'}
          </p>
        </div>
        
        <div className="mt-8 bg-gray-900 rounded-xl p-6 border border-gray-800">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div>
                <Input
                  label="Nome completo"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                />
              </div>
            )}
            
            <div>
              <Input
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </div>
            
            <div>
              <Input
                label="Senha"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
            </div>
            
            {mode === 'login' && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link href="#" className="text-[#C6F700] hover:text-[#a5cc00]">
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>
            )}
            
            <div>
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </div>
                ) : (
                  mode === 'login' ? 'Entrar' : 'Cadastrar'
                )}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {mode === 'login' ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button
                type="button"
                className="ml-1 text-[#C6F700] hover:text-[#a5cc00] focus:outline-none"
                onClick={toggleMode}
              >
                {mode === 'login' ? 'Cadastre-se' : 'Entre'}
              </button>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            &copy; 2025 Design Mushroom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
