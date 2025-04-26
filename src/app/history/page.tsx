'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function HistoryPage() {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Histórico', href: undefined }
  ];

  return (
    <DashboardLayout>
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold text-white mb-6">Histórico</h1>
        
        <div className="mb-8">
          <p className="text-gray-400 mb-6">
            Veja o histórico de todas as suas interações com os agentes de IA.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Agente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tarefa
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Data
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-800">
                {[
                  { agent: 'Design Assistant', task: 'Criação de logo para empresa de tecnologia', status: 'Concluído', date: '26/04/2025' },
                  { agent: 'UI Helper', task: 'Wireframe para aplicativo mobile', status: 'Em andamento', date: '25/04/2025' },
                  { agent: 'Color Palette', task: 'Paleta de cores para site institucional', status: 'Concluído', date: '24/04/2025' },
                  { agent: 'Image Enhancer', task: 'Otimização de imagens para banner', status: 'Falha', date: '23/04/2025' },
                  { agent: 'Typography Advisor', task: 'Sugestão de fontes para branding', status: 'Concluído', date: '22/04/2025' },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {item.agent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {item.task}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Concluído' ? 'bg-green-900 text-green-300' :
                        item.status === 'Em andamento' ? 'bg-blue-900 text-blue-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-[#C6F700] hover:text-[#a5cc00]">
                        Ver detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
