import React from 'react';
import Link from 'next/link';
import { UserPlus, FileText, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { ActivityItem } from '@/types';

interface RecentActivitiesProps {
  activities: ActivityItem[];
}

export const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'aluno':
        return <UserPlus className="w-4 h-4 text-blue-600" />;
      case 'documento':
        return <FileText className="w-4 h-4 text-sky-600" />;
      case 'associado':
        return <HeartHandshake className="w-4 h-4 text-purple-600" />;
      case 'atendimento':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <FileText className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-slate-800">Atividades recentes</h3>
        <Link
          href="/relatorios"
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          Ver todas
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 px-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{activity.title}</p>
                <p className="text-xs text-slate-500 truncate">{activity.description}</p>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-normal whitespace-nowrap flex-shrink-0">
              {activity.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
