'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Breadcrumb from '@/components/layout/Breadcrumb';

export default function PlansPage() {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Planos', href: undefined }
  ];

  const plans = [
    {
      name: 'Free',
      price: 'Grátis',
      features: [
        'Acesso a 2 agentes básicos',
        '10 solicitações por dia',
        'Histórico de 7 dias',
        'Suporte por email'
      ],
      isPopular: false,
      isCurrent: true
    },
    {
      name: 'Designer',
      price: 'R$49,90',
      features: [
        'Acesso a 5 agentes',
        'Solicitações ilimitadas',
        'Histórico de 30 dias',
        'Suporte prioritário',
        'Exportação em alta resolução'
      ],
      isPopular: true,
      isCurrent: false
    },
    {
      name: 'Pro',
      price: 'R$99,90',
      features: [
        'Acesso a todos os agentes',
        'Solicitações ilimitadas',
        'Histórico ilimitado',
        'Suporte 24/7',
        'Exportação em alta resolução',
        'API para integração',
        'Agentes personalizados'
      ],
      isPopular: false,
      isCurrent: false
    }
  ];

  return (
    <DashboardLayout>
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold text-white mb-6">Planos</h1>
        
        <div className="mb-8">
          <p className="text-gray-400 mb-6">
            Escolha o plano ideal para suas necessidades de design com nossos agentes de IA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative h-full bg-gray-900 rounded-xl p-6 border ${plan.isPopular ? 'border-[#C6F700]' : 'border-gray-800'} ${plan.isCurrent ? 'bg-gray-800' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-[#C6F700] text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-bold text-white text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="font-bold text-white text-3xl">{plan.price}</span>
                    {plan.price !== 'Grátis' && <span className="text-gray-400 ml-1">/mês</span>}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#C6F700] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button 
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                      plan.isCurrent 
                        ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' 
                        : 'bg-[#C6F700] text-gray-950 hover:bg-[#a5cc00]'
                    }`}
                  >
                    {plan.isCurrent ? 'Plano Atual' : 'Escolher Plano'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
