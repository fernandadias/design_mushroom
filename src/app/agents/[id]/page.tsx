'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function AgentPage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Agentes', href: '/agents' },
    { label: `Agente ${params.id}`, href: undefined }
  ];

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold text-white mb-6">Agente {params.id}</h1>
        
        <div className="flex-1 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {/* Interface de chat */}
          <div className="flex flex-col h-full max-h-[calc(100vh-12rem)]">
            {/* Cabeçalho do chat */}
            <div className="bg-gray-900 border-b border-gray-800 p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#C6F700] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Agente {params.id}</h2>
                  <p className="text-sm text-gray-400">Agente de IA para design</p>
                </div>
              </div>
            </div>
            
            {/* Área de mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Mensagem do agente */}
              <div className="flex justify-start">
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C6F700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-800 text-gray-100">
                    <p>Olá! Sou o Agente {params.id}, seu assistente de design. Como posso ajudar você hoje?</p>
                    <div className="text-xs mt-1 text-gray-400">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Área de input */}
            <div className="border-t border-gray-800 p-4">
              <div className="flex items-end">
                <button className="p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C6F700] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                
                <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                  <textarea
                    className="w-full bg-transparent border-0 p-3 text-gray-100 focus:outline-none resize-none"
                    placeholder="Escreva sua mensagem..."
                    rows={1}
                  />
                </div>
                
                <button
                  className="ml-2 p-2 rounded-full bg-[#C6F700] text-gray-950 hover:bg-[#a5cc00] focus:outline-none focus:ring-2 focus:ring-[#C6F700]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
