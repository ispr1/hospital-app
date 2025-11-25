import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Heart, Share2, Bookmark, ChevronRight } from 'lucide-react';
import Input from '../../components/common/Input';
import Card from '../../components/common/Card';

const HealthTipsFeed = () => {
    const navigate = useNavigate();

    const stories = [
        { id: 1, title: 'Hydration', color: 'bg-blue-400' },
        { id: 2, title: 'Sleep', color: 'bg-purple-400' },
        { id: 3, title: 'Diet', color: 'bg-green-400' },
        { id: 4, title: 'Yoga', color: 'bg-orange-400' },
        { id: 5, title: 'Mental', color: 'bg-pink-400' },
    ];

    const articles = [
        {
            id: 1,
            title: '10 Superfoods for a Healthy Heart',
            category: 'Nutrition',
            readTime: '5 min read',
            image: 'bg-red-100',
            likes: 120
        },
        {
            id: 2,
            title: 'The Importance of Mental Health Breaks',
            category: 'Mental Health',
            readTime: '3 min read',
            image: 'bg-blue-100',
            likes: 85
        },
        {
            id: 3,
            title: 'Simple Exercises for Back Pain',
            category: 'Fitness',
            readTime: '7 min read',
            image: 'bg-orange-100',
            likes: 200
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 sticky top-0 z-10 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Health & Wellness</h2>
                <Input icon={Search} placeholder="Search health tips..." />
            </div>

            <div className="p-6 space-y-6">
                {/* Stories */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-3">Quick Tips</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {stories.map((story) => (
                            <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer">
                                <div className={`w-16 h-16 ${story.color} rounded-full p-0.5 border-2 border-white shadow-md ring-2 ring-slate-100`}>
                                    <div className="w-full h-full rounded-full border-2 border-white"></div>
                                </div>
                                <span className="text-xs font-medium text-slate-600">{story.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Article */}
                <div
                    onClick={() => navigate('/health/tip/1')}
                    className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden cursor-pointer"
                >
                    <div className="relative z-10">
                        <span className="bg-white/20 px-2 py-1 rounded-lg text-xs font-bold mb-3 inline-block">FEATURED</span>
                        <h3 className="text-2xl font-bold mb-2 leading-tight">Why Sleep is Your Superpower</h3>
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">Discover how quality sleep impacts your immunity, productivity, and overall well-being.</p>
                        <button className="flex items-center gap-1 text-sm font-bold text-blue-400">
                            Read Article <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
                </div>

                {/* Articles Feed */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-3">Latest Articles</h3>
                    <div className="space-y-4">
                        {articles.map((article) => (
                            <Card
                                key={article.id}
                                onClick={() => navigate(`/health/tip/${article.id}`)}
                                className="p-0 overflow-hidden"
                            >
                                <div className={`h-32 ${article.image} w-full`}></div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{article.category}</span>
                                        <span className="text-xs text-slate-400">{article.readTime}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-3 leading-snug">{article.title}</h4>
                                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                                        <button className="flex items-center gap-1 text-slate-500 text-sm hover:text-red-500 transition-colors">
                                            <Heart className="w-4 h-4" /> {article.likes}
                                        </button>
                                        <div className="flex gap-3">
                                            <button className="text-slate-400 hover:text-slate-600"><Bookmark className="w-4 h-4" /></button>
                                            <button className="text-slate-400 hover:text-slate-600"><Share2 className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthTipsFeed;
