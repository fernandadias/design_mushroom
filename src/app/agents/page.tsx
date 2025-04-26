'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function AgentsPage() {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Agentes', href: undefined }
  ];

  return (
    <DashboardLayout>
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold text-white mb-6">Agentes</h1>
        
        <div className="mb-8">
          <p className="text-gray-400 mb-6">
            Escolha um dos nossos agentes especializados para ajudar em suas tarefas de design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <a href={`/agents/${id}`} key={id} className="block">
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-[#C6F700] transition-colors h-full">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-gray-800 flex items-center justify-center mr-4">
                      <div className="h-6 w-6 bg-[#C6F700] rounded-full"></div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-white">Agente {id}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-[#C6F700]">
                          Categoria
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Descrição do agente de IA para design.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
