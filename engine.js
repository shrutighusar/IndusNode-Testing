/**
 * Recommendation Engine for IndusNode
 * Features Hybrid approach: Collaborative + Content-based filtering
 */

import { products } from './data';

// 1. CONTENT-BASED FILTERING
// Calculates similarity between two products based on tags, category, and brand
export const getContentSimilarity = (p1, p2) => {
    let score = 0;

    // Category match (highest weight)
    if (p1.category === p2.category) score += 5;

    // Brand match
    if (p1.brand === p2.brand) score += 3;

    // Tag matches
    const commonTags = p1.tags.filter(tag => p2.tags.includes(tag));
    score += commonTags.length * 2;

    // Price similarity (within 20%)
    const priceDiff = Math.abs(p1.price - p2.price);
    const avgPrice = (p1.price + p2.price) / 2;
    if (priceDiff / avgPrice < 0.2) score += 2;

    return score;
};

// 2. COLLABORATIVE FILTERING (SIMULATED)
// In a real app, this would use a matrix of user-item interactions
// Here we simulate "Users who viewed this also liked" using a pre-defined relation or high similarity + high ratings
export const getCollaborativeSim = (p1, p2) => {
    // Simulate collaborative data: if they are in the same category and both have high ratings, 
    // they are likely to be "co-viewed" in a real recommendation engine
    let score = 0;
    if (p1.category === p2.category && p2.rating > 4.5 && p2.reviews > 500) {
        score += 5;
    }
    return score;
};

// 3. HYBRID RECOMMENDATIONS
export const getSimilarProducts = (productId, limit = 4) => {
    const target = products.find(p => p.id === productId);
    if (!target) return [];

    return products
        .filter(p => p.id !== productId)
        .map(p => ({
            ...p,
            similarity: getContentSimilarity(target, p) + getCollaborativeSim(target, p)
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
};

// 4. PERSONALIZED FOR YOU (Based on history)
export const getPersonalizedRecs = (history, limit = 6) => {
    if (!history || history.length === 0) {
        // Return high rated products if no history
        return [...products].sort((a, b) => b.rating - a.rating).slice(0, limit);
    }

    // Aggregate scores from all history items
    const scores = {};
    history.forEach(hid => {
        const historicalProduct = products.find(p => p.id === hid);
        if (!historicalProduct) return;

        products.forEach(p => {
            if (history.includes(p.id)) return; // Don't recommend what they already viewed
            const sim = getContentSimilarity(historicalProduct, p);
            scores[p.id] = (scores[p.id] || 0) + sim;
        });
    });

    return products
        .filter(p => scores[p.id])
        .map(p => ({ ...p, score: scores[p.id] }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
};

// 5. TRENDING NOW
// Based on (Rating * Weight) + (Review Count / 100) + (Random boost for news)
export const getTrendingProducts = (limit = 4) => {
    return [...products]
        .map(p => ({
            ...p,
            trendingScore: (p.rating * 10) + (p.reviews / 500) + (p.price > 1000 ? 5 : 0) // Premium items trend more
        }))
        .sort((a, b) => b.trendingScore - a.trendingScore)
        .slice(0, limit);
};

// 6. CUSTOMERS ALSO BOUGHT
// Similar to collaborative, but favors accessories if main product is a device
export const getCustomersAlsoBought = (productId, limit = 4) => {
    const target = products.find(p => p.id === productId);
    if (!target) return [];

    return products
        .filter(p => p.id !== productId)
        .map(p => {
            let score = getContentSimilarity(target, p);
            // Boost accessories if target is a core device
            if (['Smartphones', 'Laptops', 'Gaming Consoles'].includes(target.category) && p.category === 'Accessories') {
                score += 10;
            }
            return { ...p, buyScore: score };
        })
        .sort((a, b) => b.buyScore - a.buyScore)
        .slice(0, limit);
};
