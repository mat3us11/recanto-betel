import React from 'react';
import { Users, UserCheck, HeartHandshake, FileText, Files, Stethoscope } from 'lucide-react';
import { StatCardData } from '@/types';

interface StatCardProps {
  data: StatCardData;
}

export const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const getIcon = () => {
    const className = `w-5 h-5 ${data.iconColor}`;
    switch (data.iconName) {
      case 'users':
        return <Users className={className} />;
      case 'user-check':
        return <UserCheck className={className} />;
      case 'heart-handshake':
        return <HeartHandshake className={className} />;
      case 'file-text':
        return <FileText className={className} />;
      case 'files':
        return <Files className={className} />;
      case 'stethoscope':
        return <Stethoscope className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${data.bgColor}`}>
          {getIcon()}
        </div>
        <span className="text-sm font-medium text-slate-600">{data.title}</span>
      </div>

      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold text-slate-900 tracking-tight">{data.value}</span>
        <span className="text-xs font-medium text-slate-500">{data.subtext}</span>
      </div>
    </div>
  );
};
